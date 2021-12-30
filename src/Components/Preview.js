import { marked } from 'marked'
import './Preview.css'

marked.setOptions({
    breaks: true
});

export const Preview = ({ markup, isMaximized }) => {
    const getMarkdownText = () => {
        let rawMarkup = marked.parse(markup);
        return { __html: rawMarkup };
    }

    return (
        <div dangerouslySetInnerHTML={getMarkdownText()} id='preview'
            className='previewContainer'
            style={{ height: isMaximized ? 'auto' : '250px' }}>
        </div>
    )
}