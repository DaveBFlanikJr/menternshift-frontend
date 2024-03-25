import styled, { css } from "styled-components";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "expertise" | "guidance" | "languages"; // Add more variants as needed
}

// Base Badge component with default styles
const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 8px 16px;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  border-radius: 20px;
  margin: 4px;

  // Expertise Styles
  ${(props) =>
    props.variant === "expertise" &&
    css`
      background-color: #ffffff;
      color: #1f2937;
      border: 1px solid #1f2937;
    `}

  // Guidance with Styles
  ${(props) =>
    props.variant === "guidance" &&
    css`
      background-color: #e5e7eb;
      color: #1f2937;
    `}

  // Languages with Styles
  ${(props) =>
    props.variant === "languages" &&
    css`
      background-color: #e5e7eb;
      color: #1f2937;
    `}
`;

export default Badge;
