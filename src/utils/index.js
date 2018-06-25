const objectsToMapByKey = (elems, key) =>
	new Map(elems.map(elem => [elem[key], elem]));

export const isStatusOK = status => status === 'OK';

export default objectsToMapByKey;
