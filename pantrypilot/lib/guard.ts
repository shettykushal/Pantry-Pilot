const hits=new Map<string,{n:number,t:number}>();
export function limited(request:Request){const ip=request.headers.get('x-forwarded-for')?.split(',')[0]||'unknown';const now=Date.now();const x=hits.get(ip);if(!x||now-x.t>60000){hits.set(ip,{n:1,t:now});return false}x.n++;return x.n>25}
export function failure(error:unknown){console.error('AI request failed',error);return Response.json({error:'AI request failed. Check the model, API key, and account quota, then try again.'},{status:502})}
