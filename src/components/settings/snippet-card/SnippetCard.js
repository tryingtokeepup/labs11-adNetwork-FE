import React from 'react'
import { toast } from "react-toastify";

import { SnippetCardContainer, Snippet } from '../settingsStyles.js';


class SnippetCard extends React.Component{
    copyToclipboard = area => {
        this[area].select();

        document.execCommand('copy')

        toast.success('Coppied to clipboard.')
    }

    render(){
        return (
        <SnippetCardContainer>
            <Snippet>
                <h1>Horizontal Banner Snippet</h1>
                <textarea 
                    ref={(textarea) => this.horizontalArea = textarea} 
                    onClick={() => this.copyToclipboard("horizontalArea")}
                    spellcheck="false"
                >
                    {`<iframe src="https://ladnetwork.netlify.com/ad/${this.props.currentUser.id}/horizontal" frameborder="0" scrolling="no" height="100" width="670"></iframe>`}
                </textarea>
            </Snippet>
            <Snippet>
                <h1>Vertical Banner Snippet</h1>
                <textarea 
                    ref={(textarea) => this.verticalArea = textarea} 
                    onClick={() => this.copyToclipboard("verticalArea")}
                    spellcheck="false"
                >
                    {`<iframe src="https://ladnetwork.netlify.com/ad/${this.props.currentUser.id}/vertical" frameborder="0" scrolling="no" height="100" width="670"></iframe>`}
                </textarea>
            </Snippet>
            <Snippet>
            <h1>Square Banner Snippet</h1>
                <textarea 
                    ref={(textarea) => this.squareArea = textarea} 
                    onClick={() => this.copyToclipboard("squareArea")}
                    spellcheck="false"
                >
                    {`<iframe src="https://ladnetwork.netlify.com/ad/${this.props.currentUser.id}/square" frameborder="0" scrolling="no" height="100" width="670"></iframe>`}
                </textarea> 
            </Snippet>
        </SnippetCardContainer>
        )
    }
}

export default SnippetCard;