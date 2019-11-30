import {
  SearchResponse
} from "../generated/search-response_pb";

// const resp = new SearchResponse();
// const result = new SearchResponse.Result();

// result.setTitle('foobar');
// resp.addResults(result, 0);
// const obj = resp.toObject();

// console.log(obj, JSON.stringify(obj));
// console.log(resp.serializeBinary());

const searchResp = SearchResponse.deserializeBinary(new Uint8Array([ 10, 8, 18, 6, 102, 111, 111, 98, 97, 114 ]));
console.log('deserialized', JSON.stringify(searchResp.toObject()));