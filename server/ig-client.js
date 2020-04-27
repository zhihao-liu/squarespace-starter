const { IgApiClient } = require('instagram-private-api');

const USERNAME = 'sherry.devocion';
const PASSWORD = 'Devocion2020';

class IgClient {
    constructor() {
        this.client = new IgApiClient();
        this.client.state.generateDevice(USERNAME);
        this.userPromise = this.client.account.login(USERNAME, PASSWORD);
    }

    async getPictures(n) {
        const user = await this.userPromise;
        const feed = this.client.feed.user(user.pk);

        let imageUrls = [];
        while (imageUrls.length < n) {
            const page = await feed.items();
            if (!page.length) break;

            for (const post of page) {
                if (imageUrls.length >= n) break;
                const url = getImageUrl(post);
                if (url) imageUrls.push(url);
            }
        }

        return imageUrls;
    }
}

function getImageUrl(post) {
    if ('image_versions2' in post) {
        return post.image_versions2.candidates[0].url;
    } else if ('carousel_media' in post) {
        return getImageUrl(post.carousel_media[0]);
    } else {
        return null;
    }
}

module.exports = IgClient
