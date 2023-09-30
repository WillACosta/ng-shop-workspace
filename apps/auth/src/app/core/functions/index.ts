import { environment } from '@environment'

export function resolveAppImagePath(resourceName: string, extension = 'svg') {
  return `${environment.baseUrl}/assets/images/${resourceName}.${extension}`
}
