// https://stackoverflow.com/questions/1128305/regex-for-pascalcased-words-aka-camelcased-with-leading-uppercase-letter

export const strictLowerCamlCaseRegexp =
  /^[a-z]+((\d)|([\dA-Z][\da-z]+))*([A-Z])?$/;
