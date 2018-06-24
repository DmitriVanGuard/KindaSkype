const objectsToMapByKey = (elems, key) =>
	new Map(elems.map(elem => [elem[key], elem]));

export default objectsToMapByKey;
