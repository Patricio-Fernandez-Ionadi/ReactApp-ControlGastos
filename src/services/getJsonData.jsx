export function getDBResult(onSuccess) {
	return fetch("/sucursales.json")
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
