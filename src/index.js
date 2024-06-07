/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/*
addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request))
  })
  
  // No request context available here
  
  async function handleRequest(request){
	const body = await request.json()
	return new Response(JSON.stringify(body))
  }
  */


export default {
	async fetch(request, env, ctx) {
		/*
		const body = request.text;
		const headers = new Headers({
			'Accept-Encoding': "br, gzip"
		  });
		const resp = await fetch("https://developers.cloudflare.com", {method: "POST", headers})
		const data = await resp.json()
		return new Response(JSON.stringify(data))
		  */

		/*
		const headers = new Headers({
			'Accept-Encoding': "br, gzip"
		  });
		  let response = await fetch("https://developers.cloudflare.com", {method: "GET", headers});
	  
		  // As long as the original response body is returned and the Content-Encoding header is
		  // preserved, the same encoded data will be returned without needing to be compressed again.
		  return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers: response.headers,
		  });
		*/

		/*
		console.log("ree")
		const resp = await fetch("https://http.cat/", {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({username: "example"}),
		});
		
		const result = await resp.json();
		console.log("Success:", result);
		return new Response(JSON.stringify("ree"))
		*/

		async function gatherResponse(response) {
			const { headers } = response;
			const contentType = headers.get("content-type") || "";
			if (contentType.includes("application/json")) {
				return { contentType, result: JSON.stringify(await response.json()) };
			}
			return { contentType, result: response.text() };
		}
		
		const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
		const { contentType, result } = await gatherResponse(response);
	
		const cont = await contentType
		const res = await result
		const popObj = JSON.parse(res)
		// return new Response("Here's a random pulled fact about kitties: " + catObj.fact);
		let populations = popObj.data
		let text = "United States populations over time:\n"
		for (let i = populations.length-1; i>=0; i--) {
			text = text + populations[i].Year + ": " + populations[i].Population + "\n"
		}

		return new Response(text);
	
	
		/*
		const response = await fetch("https://catfact.ninja/fact");
		const { contentType, result } = await gatherResponse(response);
	
		const cont = await contentType
		const res = await result
		const catObj = JSON.parse(res)
		return new Response("Here's a random pulled fact about kitties: " + catObj.fact);
		*/
	},
};
