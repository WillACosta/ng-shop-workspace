import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest
} from '@angular/common/http'

import { Observable } from 'rxjs'

export function apiInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	let newRequest: HttpRequest<unknown> = req

	if (req.url.includes('genai-code-buddy-api.stackspot.com')) {
		newRequest = req.clone({
			headers: req.headers.set('Authorization', 'Bearer <token>')
		})
	}

	return next(req)
}
