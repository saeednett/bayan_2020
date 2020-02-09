

// const apiUrl = 'http://139.59.63.151/api/v1';
const apiUrl = 'http://thebayan.org/api/v1';


const ConfigProvider = {
  contents:           apiUrl + '/contents', // fetching contents list, need ?localizable=en
  categories:         apiUrl + '/categories', // fetching categories list , need ?localizable=en
  persons:            apiUrl + '/persons', // posting persons, needs to add tokens haeders ,need ?localizable=en
  types:              apiUrl + '/types', // posting types, needs to add tokens headers ,need ?localizable=en
  liveStreaming:      apiUrl + '/liveStreaming', // fetching countries list need ?localizable=en
  video:              apiUrl + '/contents/type/Video', // fetching countries list need ?localizable=en
  sound:              apiUrl + '/contents/type/Sound', // fetching countries list need ?localizable=en
  post:               apiUrl + '/contents/type/Post', // fetching countries list need ?localizable=en

};

export default ConfigProvider ;
// <preference name="CordovaWebViewEngine" value="CDVUIWebViewEngine" />
// http://thebayan.org/api/v1/contents/type/Sound?localizable=hs
