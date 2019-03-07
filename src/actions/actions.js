import { get, has } from 'lodash';

export const selectProductId = ({ id }) => ({
 type: 'SELECT_PRODUCT',
 payload: { id }
});

export const viewProduct = ({ id }) => ({
 type: 'VIEW_PRODUCT',
 payload: { id }
});

export const setProductOption = ({ id, e }) => (dispatch, getState) => {
  const value = e.target.hasOwnProperty('checked')
    ? e.target.checked
    : e.target.value;
  switch (id) {
    case 'color':
      dispatch(setColor(value));
      break;
    case 'numSeats':
      dispatch(setNumSeats(parseInt(value, 10)));
      break;
    case 'interiorFabricColor':
      dispatch(setInteriorFabricColor(value));
      break;
    case 'dashboardColor':
      dispatch(setDashboardColor(value));
      break;
    case 'dashboardLightsColor':
      dispatch(setDashboardLightsColor(value));
      break;
    case 'hubcapsMaterial':
      dispatch(setHubcapsMaterial(value));
      break;
    case 'hasGPS':
      dispatch(setHasGPS(value));
      break;
    case 'numExhausts':
      dispatch(setNumExhausts(parseInt(value, 10)));
      break;
    case 'hasTintedWindows':
      dispatch(setHasTintedWindows(value));
      break;
    case 'hasRadio':
      dispatch(setHasRadio(value));
      break;
    case 'radioType':
      dispatch(setRadioType(value));
      break;
    case 'hasGloveBox':
      dispatch(setHasGloveBox(value));
      break;
    case 'hasCupholders':
      dispatch(setHasCupholders(value));
      break;
    case 'numCupholders':
      dispatch(setNumCupholders(parseInt(value, 10)));
      break;
    case 'hasCigaretteLighters':
      dispatch(setHasCigaretteLighters(value));
      break;
    case 'numCigaretteLighters':
      dispatch(setNumCigaretteLighters(parseInt(value, 10)));
      break;
    case 'spareTire':
      dispatch(setSpareTire(value));
      break;
    case 'hasHoodOrnament':
      dispatch(setHasHoodOrnament(value));
      break;
    case 'hoodOrnament':
      dispatch(setHoodOrnament(value));
      break;
    case 'engine':
      dispatch(setEngine(value));
      break;
    case 'hasAirConditioning':
      dispatch(setHasAirConditioning(value));
      break;
    case 'hasTrunkMonkey':
      dispatch(setHasTrunkMonkey(value));
      break;
    case 'trunkMonkey':
      dispatch(setTrunkMonkey(value));
      break;
    case 'floormatsColor':
      dispatch(setFloormatsColor(value));
      break;
    case 'hasMonogrammedSteeringWheelCover':
      dispatch(setHasMonogrammedSteeringWheelCover(value));
      break;
    case 'monogram':
      dispatch(setMonogram(value));
      break;
    default:
  }
}

const setOption = ({ id, value }) => ({
  type: 'SET_OPTION',
  payload: {
    [`${id}`]: value
  }
});

const removeOption = (id) => ({
  type: 'REMOVE_OPTION',
  payload: { id }
});

const normalizeBoolean = (value) => {
  return value === 'on' || value === 'yes' || value;
}

const setColor = (color) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  if (Object.keys(options.color.requirements).includes(selectedProduct.type)) {
    color = options.color.requirements[selectedProduct.type];
  }
  dispatch(setOption({ id: 'color', value: color }));
}

const setNumSeats = (numSeats) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  if (Object.keys(options.numSeats.requirements).includes(selectedProduct.type)) {
    numSeats = options.numSeats.requirements[selectedProduct.type];
  }
  dispatch(setOption({ id: 'numSeats', value: numSeats }));
}

const setInteriorFabricColor = (interiorFabricColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'interiorFabricColor', value: interiorFabricColor }));
}

const setDashboardColor = (dashboardColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'dashboardColor', value: dashboardColor }));
}

const setDashboardLightsColor = (dashboardLightsColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'dashboardLightsColor', value: dashboardLightsColor }));
}

const setHubcapsMaterial = (hubcapsMaterial) => (dispatch, getState) => {
  dispatch(setOption({ id: 'hubcapsMaterial', value: hubcapsMaterial }));
}

const setHasGPS = (hasGPS) => (dispatch, getState) => {
  const value = normalizeBoolean(hasGPS);
  if (value) {
    dispatch(setOption({ id: 'hasGPS', value }));
  } else {
    dispatch(removeOption('hasGPS'));
  }
}

const setNumExhausts = (numExhausts) => (dispatch, getState) => {
  dispatch(setOption({ id: 'numExhausts', value: numExhausts }));
}

const setHasTintedWindows = (hasTintedWindows) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasTintedWindows.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasTintedWindows = get(options.hasTintedWindows.requirements, selectedProduct.type)

    if (!hasTintedWindows) {
      throw new Error('The selected vehicle does not support tinted windows.');
    }
  }

  const value = normalizeBoolean(hasTintedWindows);
  if (value) {
    dispatch(setOption({ id: 'hasTintedWindows', value }));
  } else {
    dispatch(removeOption('hasTintedWindows'));
  }
}

const setHasRadio = (hasRadio) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasRadio.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasRadio = get(options.hasRadio.requirements, selectedProduct.type);

    if (!hasRadio) {
      throw new Error('The selected vehicle does not support radios.');
    }
  }

  const value = normalizeBoolean(hasRadio);
  if (value) {
    dispatch(setOption({ id: 'hasRadio', value }));
  } else {
    dispatch(removeOption('hasRadio'));
  }
}

const setRadioType = (radioType) => (dispatch, getState) => {
  dispatch(setOption({ id: 'radioType', value: radioType }));
}

const setHasGloveBox = (hasGloveBox) => (dispatch, getState) => {
  const value = normalizeBoolean(hasGloveBox);
  if (value) {
    dispatch(setOption({ id: 'hasGloveBox', value }));
  } else {
    dispatch(removeOption('hasGloveBox'));
  }
}

const setHasCupholders = (hasCupholders) => (dispatch, getState) => {
  const value = normalizeBoolean(hasCupholders);
  if (value) {
    dispatch(setOption({ id: 'hasCupholders', value }));
  } else {
    dispatch(removeOption('hasCupholders'));
    dispatch(removeOption('numCupholders'));
  }
}

const setNumCupholders = (numCupholders) => (dispatch, getState) => {
  dispatch(setOption({ id: 'numCupholders', value: numCupholders }));
}

const setHasCigaretteLighters = (hasCigaretteLighters) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasCigaretteLighters.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasCigaretteLighters = get(options.hasCigaretteLighters.requirements, selectedProduct.type)

    if (!hasCigaretteLighters) {
      throw new Error('The selected vehicle does not support cigarette lighters.');
    }
  }

  const value = normalizeBoolean(hasCigaretteLighters);
  if (value) {
    dispatch(setOption({ id: 'hasCigaretteLighters', value }));
  } else {
    dispatch(removeOption('hasCigaretteLighters'));
    dispatch(removeOption('numCigaretteLighters'));
  }
}

const setNumCigaretteLighters = (numCigaretteLighters) => (dispatch, getState) => {
  dispatch(setOption({ id: 'numCigaretteLighters', value: numCigaretteLighters }));
}

const setSpareTire = (spareTire) => (dispatch, getState) => {
  dispatch(setOption({ id: 'spareTire', value: spareTire }));
}

const setHasHoodOrnament = (hasHoodOrnament) => (dispatch, getState) => {
  const value = normalizeBoolean(hasHoodOrnament);
  if (value) {
    dispatch(setOption({ id: 'hasHoodOrnament', value }));
  } else {
    dispatch(removeOption('hasHoodOrnament'));
  }
}

const setHoodOrnament = (hoodOrnament) => (dispatch, getState) => {
  dispatch(setOption({ id: 'hoodOrnament', value: hoodOrnament }));
}

const setEngine = (engine) => (dispatch, getState) => {
  dispatch(setOption({ id: 'engine', value: engine }));
}

const setHasAirConditioning = (hasAirConditioning) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasAirConditioning.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasAirConditioning = get(options.hasAirConditioning.requirements, selectedProduct.type)

    if (!hasAirConditioning) {
      throw new Error('The selected vehicle does not support tinted windows.');
    }
  }

  const value = normalizeBoolean(hasAirConditioning);
  if (value) {
    dispatch(setOption({ id: 'hasAirConditioning', value }));
  } else {
    dispatch(removeOption('hasAirConditioning'));
  }
}


const setHasTrunkMonkey = (hasTrunkMonkey) => (dispatch, getState) => {
  const value = normalizeBoolean(hasTrunkMonkey);
  if (value) {
    dispatch(setOption({ id: 'hasTrunkMonkey', value }));
  } else {
    dispatch(removeOption('hasTrunkMonkey'));
    dispatch(removeOption('trunkMonkey'));
  }
}

const setTrunkMonkey = (trunkMonkey) => (dispatch, getState) => {
  dispatch(setOption({ id: 'trunkMonkey', value: trunkMonkey }));
}

const setFloormatsColor = (floormatsColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'floormatsColor', value: floormatsColor }));
}


const setHasMonogrammedSteeringWheelCover = (hasMonogrammedSteeringWheelCover) => (dispatch, getState) => {
  const value = normalizeBoolean(hasMonogrammedSteeringWheelCover);
  if (value) {
    dispatch(setOption({ id: 'hasMonogrammedSteeringWheelCover', value }));
  } else {
    dispatch(removeOption('hasMonogrammedSteeringWheelCover'));
    dispatch(removeOption('monogram'));
  }
}

const setMonogram = (monogram) => (dispatch, getState) => {
  dispatch(setOption({ id: 'monogram', value: monogram }));
}
