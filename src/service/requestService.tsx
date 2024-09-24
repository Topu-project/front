const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

interface FetchOptions {
  url: string;
  token: string;
  headers?: HeadersInit;
}

export async function fetchAuthd<T>({ url, token, headers }: FetchOptions): Promise<T> {
  console.log(BASE_URL + url);
  const response = await fetch(BASE_URL + url, {
    headers: {
      // Auth: token,
      ...headers, // 추가적인 헤더 병합
    },
  });

  const data = await response.json();

  if (!response.ok) {
    handleError(response);
  }

  return data;
}

function handleError(response:any) {
  if (!response.ok) {
    console.error(response.error)
  }
}