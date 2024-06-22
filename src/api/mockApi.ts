export interface Option {
  icon: string;
  label: string;
}

interface ApiResponse {
  success: boolean;
}
/**
 *  Mock API to fetch data
 */
export const submitData = async (data: Option[]): Promise<ApiResponse> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
};
