import alanBtn from '@alan-ai/alan-sdk-web'
import React, { useEffect, useState } from 'react'
import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = 'd7992c199e46e6d7a0b4a1376eaf77602e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

     const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
       alanBtn({
           key: alanKey,
           onCommand: (command, articles) => {
                if(command === 'newsHeadlines'){
                    setNewsArticles(articles);
                }
           }
       })
    }, [])
    
  return (
    <div>
        <h1>
            Alan AI news application
            <NewsCards articles={newsArticles} />
        </h1>
    </div>
  )
}

export default App