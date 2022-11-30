const base_url = 'https://72.arrowhitech.net/tn3/digital/graphql'

// Request init
const resquest_init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'no-cors'

}

// Primary Menu Header
export const getMenuHeader = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
              {
                pages {
                  edges {
                    node {
                      id
                      content
                    }
                  }
                }
			      `
        })
    }).then(res => res.json())
        .then(res => res.data)
    return response;
}