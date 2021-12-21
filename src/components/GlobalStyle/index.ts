import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #edfeff;
		color: #30252f;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		letter-spacing: 4%;
	}

	a {
		text-decoration: none;
	}

	.container {
		padding: 0 .625rem;

		@media(min-width: 992px) {
			margin: 0 auto;
			max-width: 1140px;
			padding: 0;
		}
	}

	.flex {
		display: flex;
	}

	.flex--column {
		flex-direction: column;
	}

	.flex--center {
		align-items: center;
		justify-content: center;
	}

	.error-msg {
		color: #c0180a;
		font-size: 1.125rem;
		font-weight: 500;
	}

	.button {
		background-color: #007ba3;
		border: none;
		border-radius: 5px;
		color: #edfeff;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1.25rem;

		:last-child {
			margin-left: .625rem;
		}

		&:focus, &:hover {
			filter: brightness(0.9);
		}
	}
`;

export default GlobalStyle;
