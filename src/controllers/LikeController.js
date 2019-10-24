const Tweet = require('../models/Tweet')

class LikeController {
  async store (req, res) {
    const tweet = await Tweet.findById(req.params.id)

    tweet.set({ likes: tweet.likes + 1 })

    await tweet.save()

    return res.json(tweet)
  }
}

module.exports = new LikeController()
