// src/tests/mockApi.test.ts
import { submitData, Option } from '../api/mockApi';
import fetchMock from 'jest-fetch-mock';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetchMock.resetMocks();
});

test('submitData makes a POST request and returns success', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

  const data: Option[] = [
    { icon: 'icon1', label: 'Label1' },
    { icon: 'icon2', label: 'Label2' },
  ];
  const result = await submitData(data);

  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  expect(result.success).toBe(true);
});

test('submitData handles API call failure', async () => {
  fetchMock.mockRejectOnce(new Error('Failed to fetch'));

  const data: Option[] = [
    { icon: 'icon1', label: 'Label1' },
    { icon: 'icon2', label: 'Label2' },
  ];

  let result;
  try {
    result = await submitData(data);
  } catch (error) {
    result = { success: false };
  }

  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  expect(result.success).toBe(false);
});
