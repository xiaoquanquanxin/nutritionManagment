export const TOJSON = (data: any) => {
	if (!data) {
		return data
	}
	return JSON.parse(JSON.stringify(data))
}