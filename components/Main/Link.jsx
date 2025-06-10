"use client"

import Link from "next/link";

export default function CustomLink({ href, children, ...props }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return <Link href={href} {...props}>{children}</Link>;
}

/**
 * Automatically determines link type and renders appropriate element:
 * - Next.js <Link> for internal links
 * - HTML <a> for external links with security attributes
 * 
 * @param {Object} props - Component properties
 * @param {string} props.href - Destination URL or path
 * @param {React.ReactNode} props.children - Link content
 * @param {Object} [props.rest] - Additional properties to pass to component
 * @returns {JSX.Element} Rendered link element
 * 
 * @example
 * // Internal link
 * <CustomLink href="/about">About</CustomLink>
 * 
 * @example
 * // External link
 * <CustomLink href="https://example.com">External site</CustomLink>
 */