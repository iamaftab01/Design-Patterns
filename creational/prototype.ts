/*

The Prototype pattern allows you to create new objects by copying (cloning) an existing object,
rather than creating from scratch (with new).

Think of it like copying a template and making small changes to it instead of building from zero every time.

Example: API request templates, user sessions

*/

interface Prototype<T> {
  clone(): T;
}

class APIRequest implements Prototype<APIRequest> {
  constructor(
    public url: string,
    public method: string,
    public headers: Record<string, string>,
    public body: Object,
  ) {}

  public clone(): APIRequest {
    return new APIRequest(
      this.url,
      this.method,
      this.headers,
      JSON.parse(JSON.stringify(this.body)),
    );
  }
}

const baseRequest = new APIRequest(
  'https://example.com/api',
  'GET',
  { 'Content-Type': 'application/json' },
  { foo: 'bar' },
);

const clonedRequest = baseRequest.clone();
console.log(baseRequest);
console.log(clonedRequest);

// Modifying the data in the cloned object
clonedRequest.method = 'POST';
clonedRequest.body = { foo: 'baz' };

console.log(clonedRequest);