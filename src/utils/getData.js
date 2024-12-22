const URL = "https://raw.githubusercontent.com/freddyB19/scraper-games/refs/heads/master/scraper/result.json"


export const getData = async () => {
	try{
		const response = await fetch(URL)
		const responseJson = await response.json()
		return responseJson
	} catch (e) {
		console.error("Fetch: " + e)
	}
}

