import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // check if argument string and number
  let sampleActivityNum = parseFloat(sampleActivity);
  if (typeof sampleActivity !== "string" || isNaN(sampleActivityNum)) {
    // console.log(false);
    return false;
  }
  // console.log(sampleActivity);
  if(sampleActivityNum> MODERN_ACTIVITY || sampleActivityNum <=0){
    // console.log(false);
    return false
  }
  let logOf2 = 0.693 //approximation of the natural logarithm of two.
   let ageOfFind = Math.ceil(Math.log(MODERN_ACTIVITY/ sampleActivityNum) / (logOf2/HALF_LIFE_PERIOD))
  //  console.log(ageOfFind);
   return ageOfFind
}

dateSample("1");
dateSample("Woo");
dateSample(1);
dateSample("22387");
