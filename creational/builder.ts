/*

The Builder Pattern separates the construction of a complex object from its representation,
so that the same construction process can create different representations.

It’s like assembling a product step-by-step, where each step is configurable.

Example: HttpRequest Builder, Building a meal(bread, toppings, sauce) etc.

*/

class HttpRequest {
  constructor(
    private method: string,
    private url: string,
    private headers: Record<string, string>,
    private queryParams: Record<string, string>,
    private body?: Object,
  ) {}
}

class HttpRequestBuilder {
  private method: string = 'GET';
  private url!: string;
  private headers: Record<string, string> = {};
  private queryParams: Record<string, string> = {};
  private body?: Object;

  public setMethod(method: string) {
    this.method = method;
    return this;
  }

  public setURL(url: string) {
    this.url = url;
    return this;
  }

  public addHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  public addParam(key: string, value: string) {
    this.queryParams[key] = value;
    return this;
  }

  public setBody(body: any) {
    this.body = body;
    return this;
  }

  public build() {
    return new HttpRequest(this.method, this.url, this.headers, this.queryParams, this.body);
  }
}

const request = new HttpRequestBuilder()
                .setMethod('POST')
                .setURL('https://example.com/api')
                .addHeader('correlationId', 'c1234')
                .build()

console.log(request);