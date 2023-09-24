import { environment } from '@environment'

export function resolveAppImagePath(resourceName: string) {
  return `${environment.baseUrl}/assets/${resourceName}`
}
