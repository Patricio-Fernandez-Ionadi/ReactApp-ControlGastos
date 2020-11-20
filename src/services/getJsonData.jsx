export function getDBResult(onSuccess) {
	return fetch("https://run.mocky.io/v3/f10f7bcf-a643-4ab4-af7e-9f2e89f6191d")
		.then((res) => (res.ok ? Promise.resolve(res.json()) : Promise.reject(res)))
		.then((res) => setUniqueArray(res))
		.then(onSuccess)
}
function setUniqueArray(arr) {
	let dataComp = []
	arr.forEach((cadaArray) => {
		dataComp = dataComp.concat(cadaArray)
	})
	return dataComp
}
