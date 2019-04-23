import React from 'react' 


 const Contact = () =>{
    return(
        <div>
            <a className="contact-email" href={"mailto: will.ley@madhatter.dev"} alt="email">will.ley@madhatter.dev</a>
            <div className="contact-link-wrap">
                <a className="contact-linked-in" href={"https://www.linkedin.com/in/wley3337/"} alt="linked in profile" target="_blank" rel="noopener noreferrer">
                    <img src="/img/linked-in.png" alt="linked-in" />
                </a>
                <a className="contact-github" href={"https://github.com/wley3337"} alt="git hub" target="_blank" rel="noopener noreferrer">
                    <img src="/img/chesserOctocat.png" alt="git hub" />
                </a>
                <a className="contact-medium" href={"https://medium.com/@wley3337"} alt="medium blogs" target="_blank" rel="noopener noreferrer">
                    <img src="/img/reporter-hat-with-card.png" alt="medium" />
                </a>
            </div>
        </div>
    )
}

export default Contact
