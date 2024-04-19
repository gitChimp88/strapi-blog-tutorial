import Markdown from 'markdown-to-jsx';

export default function ArticleView({ articleMarkdown, title }) {
  return (
    <div style={{ marginTop: '150px', padding: '40px' }}>
      <a href="/">Back</a>
      <Markdown>{articleMarkdown}</Markdown>
    </div>
  );
}
