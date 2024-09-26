const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

// 사용법 
// const recruitmentFetch = {
//   url: '/recruitments/1',
//   token: 'your_token',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };
// const recruitmentData = get<Recruitment>({ recruitmentFetch });
// 혹은 
// const recruitmentData = get<Recruitment>({ url: '/recruitments/1' });

interface FetchOptions {
  url: string;
  token?: string;
  headers?: HeadersInit;
}

interface RequestOptions<T> extends FetchOptions {
  body?: T;
}

/**
 * 공통 요청 함수
 * @param param0 url, token, headers, body
 * @param method GET/POST/DELETE/PUT
 * @returns data
 */
async function fetchRequest<T, R>({ url, token, headers, body }: RequestOptions<T>, method: string): Promise<R> {
  console.log(url);
  const response = await fetch(BASE_URL + url, {
    method,
    headers: {
      'Content-Type': body ? 'application/json' : '', 
      ...(token ? { Auth: token } : {}),
      ...(headers ? headers : {}),
    },
    body: body ? JSON.stringify(body) : undefined, // body가 있으면 직렬화
  });

  const data = await response.json();

  if (!response.ok) {
    handleError(response);
  }

  return data;
}

/**
 * GET Request <Generic T>
 * @param options 
 *    url : 리퀘스트URL
 *    token : 인증용토큰(optional) 
 *    headers : 헤더정보<K, V>(optional) 
 * @returns data
 */
export async function get<T>(options: FetchOptions): Promise<T> {
  return fetchRequest<T, T>(options, 'GET');
}

/**
 * DELETE Request <Generic T>
 * @param options 
 *    url : 리퀘스트URL
 *    token : 인증용토큰(optional) 
 *    headers : 헤더정보<K, V>(optional) 
 * @returns data
 */
export async function del<T>(options: FetchOptions): Promise<T> {
  return fetchRequest<T, T>(options, 'DELETE');
}

/**
 * POST Request <Generic T *request model , R *return model>
 * @param options 
 *    url : 리퀘스트URL
 *    token : 인증용토큰(optional) 
 *    headers : 헤더정보<K, V>(optional) 
 * @returns data
 */
export async function post<T, R>(options: RequestOptions<T>): Promise<R> {
  return fetchRequest<T, R>(options, 'POST');
}

/**
 * PUT Request <Generic T *request model , R *return model>
 * @param options 
 *    url : 리퀘스트URL
 *    token : 인증용토큰(optional) 
 *    headers : 헤더정보<K, V>(optional) 
 * @returns data
 */
export async function put<T, R>(options: RequestOptions<T>): Promise<R> {
  return fetchRequest<T, R>(options, 'PUT');
}

// 에러 핸들링 함수
// @TODO 추후 메세지창 띄우기
function handleError(response: any) {
  if (!response.ok) {
    console.error(response.error);
  }
}