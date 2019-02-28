import { css } from "styled-components";

export const CardStyles = css`
  &.card-item {
    display: flex;
    padding: 1rem;
    @media (min-width: 640px) {
      width: 50%;
    }
    @media (min-width: 960px) {
      width: 25%;
    }
    &.changing-status {
      opacity: 0.4;
    }
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px 0 rgba(1, 2, 3, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover {
      .image {
        filter: contrast(100%);
      }
    }
  }

  .content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }

  .title-cta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .image {
    background-image: ${(props: { imageSrc: string }) =>
      `url(${props.imageSrc})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 3px 0 3px;
    filter: contrast(70%);
    transition: filter 0.5s;
    &::before {
      content: "";
      display: block;
      padding-top: 56.25%;
    }
    @media (min-width: 640px) {
      &::before {
        padding-top: 66.6%;
      }
    }
  }

  .title {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: rgb(1, 2, 3);
  }

  .text {
    flex: 1 1 auto;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
`;
