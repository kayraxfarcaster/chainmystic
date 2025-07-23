"use client";

import React, { useState } from "react";
import "./styles.css";

const fortunes = [
  "A ripple through the blockchain hints at an unexpected gain. One of your dormant wallets is about to become relevant again—check it. A project you once dismissed is regaining traction, and this time you're early. Trust your past instincts; they’ve laid the groundwork for your upcoming win.",
  "Your digital intuition sharpens daily. Soon, a new NFT drop will catch your eye — not just any drop, but one that aligns perfectly with your future ambitions. Stay vigilant and ready to move quickly, as opportunity favors the prepared degen.",
  "Behind every smart contract, there's a story. Soon, you'll uncover a hidden gem — a project with solid fundamentals and a passionate community. Engage deeply and let your onchain presence amplify the magic you're about to create.",
  "The blockchain whispers secrets only a few can hear. Your next move will bring you closer to a legendary NFT that could redefine your collection. Embrace patience and precision, the stars favor the calculated risk.",
  "As the Web3 universe expands, your network grows stronger. A collaboration opportunity will present itself that merges creativity and technology in unexpected ways. Be bold and open; this could mark a milestone in your digital journey.",
  "An airdrop is more than just tokens — it’s a symbol of trust and community. Keep an eye on your addresses and communications. Someone is about to recognize your contributions in a way that surprises and delights you.",
  "Your onchain karma shines bright. The universe is preparing a reward for your consistent efforts and good vibes. A new project will invite you to join as a core contributor — accept the call and watch your influence soar.",
  "The next bull run isn’t just about price — it’s about mindset. You are aligning your energies with the market’s pulse. Your patience and research will pay off handsomely; prepare to witness your digital assets bloom like never before.",
  "A meme coin you once laughed at is quietly gaining momentum. Sometimes, fortune favors the unexpected and the underestimated. Keep your mind open and your wallet ready for a delightful surprise.",
  "A fellow degen will cross your path and double your luck. This partnership may start with a simple message or retweet but will grow into a formidable alliance. Trust the signs and nurture this connection.",
  "Your ENS name is not just a label; it’s your onchain legacy. Soon, its value will transcend the digital realm, opening doors to exclusive events and collaborations. Protect it and let it speak for your identity in Web3.",
  "Creators are the true magicians of the blockchain. Launching your project now will resonate with the community and build a foundation for long-term success. Your timing couldn’t be better — trust the creative spark within.",
  "Behind every NFT floor price is a story of belief and community. Your support for underrated projects will soon be recognized, bringing new opportunities for collaborations and rewards. Stay authentic and engaged.",
  "The Base gods are watching your moves. They whisper: 'Cast now. Greatness awaits.' Don’t hesitate; the moment to step forward is now. Your vision and courage will inspire many.",
  "A once-forgotten wallet holds treasures you’ve yet to discover. Dive deep into your past transactions; what you find could change your financial path and rekindle your passion for the decentralized world.",
  "A new DAO will invite you to join as a founding member. This group’s mission aligns with your values and will provide both influence and rewards. Get involved early to shape the future you believe in.",
  "Your social graph is expanding in meaningful ways. Influencers and innovators in the space are noticing your activity. Engagement now will open doors to partnerships and opportunities that accelerate your digital journey.",
  "Tokens from a nostalgic project are resurging. Revisiting these will connect you to a community rich with history and future potential. Rekindle old alliances and forge new paths together.",
  "The stars align for a major upgrade to your crypto toolkit. New tools and platforms will enhance your efficiency and gains. Stay curious and ready to adapt; evolution is key in Web3.",
  "Your journey is unique, marked by resilience and foresight. Expect an invitation to an exclusive event that will elevate your profile and network. Prepare to shine and take your place among the elite degens."
];

export default function Home() {
  const [fortune, setFortune] = useState<string | null>(null);

  const getFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <main className="container">
      <h1>Fortune Teller 🔮</h1>
      <p className="subtitle">
        Click the button below to reveal your fortune written in the stars. If you enjoy it, feel free to leave a little tip 💸
      </p>
      <button className="btn" onClick={getFortune}>
        Show My Fortune
      </button>

      {fortune && (
        <>
          <div className="card">
            <p className="card-title">🔮 Your Fortune:</p>
            <p className="card-content">“{fortune}”</p>
          </div>

          <a
          href="https://etherscan.io/address/0xc3a81e2297d682f08fcfff4056719d45ceab3108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="tip-btn">💸 If you liked would like to give some tip?</button>
          </a>
        </>
      )}
    </main>
  );
}

