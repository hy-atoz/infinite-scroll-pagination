export const baseUrl = `http://13.214.255.182/api/v1`;

export const categoryEndpoint = `/cat`; // baseUrl + /cat + /{language}
export const contentEndpoint = `/content`; // baseUrl + /content + /{category} + /{language} + /{index}

export async function getGymDataEn(index) {
  const res = await fetch(`${baseUrl}${contentEndpoint}/gzt/en/${index}`);
}
