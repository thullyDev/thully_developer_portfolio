import ReactMarkdown from 'react-markdown';
import type { ProjectReadMeProps } from './types';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import "./styles.scss"

export function ProjectReadMe({ full_name }: ProjectReadMeProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${full_name}/main/README.md`)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);
  
	return (
		<div className="project-readme">
			<div className="inner-con">
      			<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
			</div>
		</div>
	)
}