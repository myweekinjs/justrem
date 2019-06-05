/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Component } from "react";
import Head from "next/head";
import Input from "../components/Input";
import Logo from "../components/Logo";
import SettingsButton from "../components/SettingsButton";
import ResultItem from "../components/ResultItem";
import { Dropdown, DropdownWrapper } from "../components/Dropdown";

const RemInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  > input {
    flex-grow: 2;
    margin-right: 1rem;
  }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rem: "",
      // results: [],
      base: 16,
      unit: "rem",
      dropdownActive: false
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // setResults(val) {
  //   if (val === "") {
  //     this.setState({
  //       results: []
  //     });
  //     return false;
  //   }

  //   const rems = val.split(",");

  //   if (rems.length > 0) {
  //     const { results } = this.state;
  //     // eslint-disable-next-line prettier/prettier
  //     rems.forEach((rem) => {
  //       const clean = rem.trim();
  //       const remInt = parseInt(clean, 0);
  //       // eslint-disable-next-line prettier/prettier
  //       const isInResults = results.find((result) => result.px === remInt);

  //       if (isInResults) {
  //         return false;
  //       }

  //       // eslint-disable-next-line no-restricted-globals
  //       if (isNaN(remInt)) {
  //         console.log("idiot");
  //       } else {
  //         const value = this.calculateRem(remInt);
  //         const copy = results;

  //         copy.push({
  //           rem: value,
  //           px: remInt
  //         });

  //         this.setState({
  //           results: copy
  //         });
  //       }
  //     });
  //   }

  //   return false;
  // }

  getResults() {
    const { rem, unit } = this.state;
    const splitPx = rem.split(",");

    // eslint-disable-next-line prettier/prettier
    const Results = splitPx.map((px, i) => {
        const clean = px.trim();
        const pxInt = parseInt(clean, 0);

        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(pxInt)) {
          let calcRem = this.calculateRem(pxInt).toFixed(3);
          calcRem = calcRem.replace(/0+$/, "");
          calcRem = calcRem.replace(/\.+$/, "");

          return (
            // eslint-disable-next-line react/no-array-index-key
            <ResultItem key={i}>
              <span className="px">{pxInt}px</span>
              <span className="rem">
                {calcRem.toString()}
                {unit}
              </span>
            </ResultItem>
          );
        }
        return false;
      })
      // eslint-disable-next-line prettier/prettier
      .filter((result) => result !== false);

    return Results;
  }

  calculateRem(val) {
    const { base } = this.state;
    if (base < 0 || base === 0) {
      return val / 16;
    }

    return val / base;
  }

  render() {
    const { rem, base, unit, dropdownActive } = this.state;
    return (
      <div>
        <Head>
          <title>Just REM | Online rem calculator</title>
          <meta
            name="description"
            content="Easily and quickly convert pixel values into rem values. Change the base to match your project specifications."
          />
          <meta property="og:site_name" content="Just REM" />
          <meta property="og:og:type" content="article" />
          <meta property="og:url" content="https://justrem.xyz/" />
          <meta
            property="og:title"
            content="Just REM | Online rem calculator"
          />
          <meta
            property="og:description"
            content="Easily and quickly convert pixel values into rem values. Change the base to match your project specifications."
          />
          <meta name="twitter:site" content="@hurricane_int" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Just REM | Online rem calculator"
          />
          <meta
            name="twitter:description"
            content="Easily and quickly convert pixel values into rem values. Change the base to match your project specifications."
          />
        </Head>
        <Logo>Just REM</Logo>
        <p
          css={css`
            text-align: center;
            margin-bottom: 2rem;
            margin-top: 0;
          `}
        >
          Easily and quickly convert pixel values into rem values.
        </p>
        <RemInputWrapper>
          <Input
            value={rem}
            name="rem"
            placeholder="10, 20, 12"
            // eslint-disable-next-line prettier/prettier
            onChange={(e) => {
              this.setState({
                rem: e.target.value
              });
            }}
            aria-label="Rem"
          />
          <DropdownWrapper>
            <SettingsButton
              // eslint-disable-next-line prettier/prettier
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  dropdownActive: !dropdownActive
                });
              }}
            >
              Settings
            </SettingsButton>
            {dropdownActive ? (
              <Dropdown>
                <label htmlFor="unit">
                  Append{" "}
                  <input
                    type="text"
                    name="unit"
                    id="unit"
                    placeholder="rem"
                    value={unit}
                    // eslint-disable-next-line prettier/prettier
                  onChange={(e) => this.onChange(e)}
                  />
                </label>
                <label htmlFor="base">
                  Base
                  <input
                    type="number"
                    name="base"
                    id="base"
                    placeholder="16"
                    value={base}
                    // eslint-disable-next-line prettier/prettier
                  onChange={(e) => this.onChange(e)}
                  />
                </label>
              </Dropdown>
            ) : (
              false
            )}
          </DropdownWrapper>
        </RemInputWrapper>
        <p
          css={css`
            color: #718096;
          `}
        >
          Separate values with a comma (,)
        </p>
        {this.getResults()}
      </div>
    );
  }
}
