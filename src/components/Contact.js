import React from 'react' 


 const Contact = () =>{
    return(
        <div className="contact-wrapper">
            <a className="contact-email text" href={"mailto: will.ley@madhatter.dev"} alt="email">will.ley@madhatter.dev</a>
            <div className="contact-link-wrapper">
                <a  href={"https://www.linkedin.com/in/wley3337/"} alt="linked in profile" target="_blank" rel="noopener noreferrer"><div className="contact-linked-in"></div>
                </a>
                <a  href={"https://github.com/wley3337"} alt="git hub" target="_blank" rel="noopener noreferrer">
                    <div className="contact-github"></div>
                </a>
                <a  href={"https://medium.com/@wley3337"} alt="medium blogs" target="_blank" rel="noopener noreferrer">
                  <div className="contact-medium text">Medium</div> 
                </a>
            </div>
        </div>
    )
}

export default Contact
