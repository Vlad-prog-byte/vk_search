import { HttpResponse, http } from 'msw'
import { mockUsers } from "../mockUsers";
export const handlers = [
    http.get('https://dummyjson.com/users/search', ({ request }) => {
        const url = new URL(request.url);
        const q = url.searchParams.get('q');
        if (q === 'Terry')
            return HttpResponse.json({ mockUsers });
        else
            return new HttpResponse(null, {
                status: 404,
                statusText: 'Out Of Apples',
              });
    }),
  ]