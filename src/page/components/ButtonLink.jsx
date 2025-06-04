import { Link as RouterLink } from "react-router-dom";

/**
 * Smart Link component.
 * Renders a React Router <Link> for internal links and an <a> tag for external links.
 *
 * @param {string} props.to - The destination URL or path.
 * @param {React.ReactNode} props.children - The content inside the link.
 * @returns {JSX.Element} The rendered link element.
 */

export default function Link({ to, children, ...props }) {
  const isExternal = to.startsWith("http://") || to.startsWith("https://");

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  else return <RouterLink to={to} {...props}>{children}</RouterLink>;
};