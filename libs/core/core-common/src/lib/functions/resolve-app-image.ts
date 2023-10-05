interface Params {
	baseUrl: string
	resourceName: string
	extension?: string
}

export function resolveAppImagePath({
	baseUrl,
	resourceName,
	extension = 'svg'
}: Params) {
	return `${baseUrl}/assets/images/${resourceName}.${extension}`
}
