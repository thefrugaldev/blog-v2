import { Heading, Text, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "@shared/components/external-link";
import Link from "next/link";
import React, { FC } from "react";
import Extension from "./extension";

const VsCodeExtensions: FC = () => {
  return (
    <>
      <Heading as="h2" fontSize="2xl">
        Integrated Development Environment
      </Heading>
      <Text>
        For daily development purposes, my go-to IDE is{" "}
        <ExternalLink
          route={"https://code.visualstudio.com/download"}
          linkText={"Visual Studio Code"}
        />{" "}
        because the vast library of extensions it offers. Some of the unique
        extensions that I like to use are:
      </Text>
      <Extension
        name="1984"
        link="https://marketplace.visualstudio.com/items?itemName=juanmnl.vscode-theme-1984"
      >
        Really cool theme if you're like me and typically default to dark mode
        on most websites and applications.
      </Extension>
      <Extension
        name="Apollo GraphQL"
        link="https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo"
      >
        I tend to use GraphQL for a lot of personal and professional projects.
        This theme allows me to get intellisense support for any GraphQL queries
        or mutations I need to create.
      </Extension>
      <Extension
        name="Auto Import"
        link="https://marketplace.visualstudio.com/items?itemName=steoates.autoimport"
      >
        This extension makes creating new components a breeze with auto
        suggestion and completion for JavaScript imports.
      </Extension>
      <Extension
        name="Auto Rename Tag"
        link="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
      >
        If you're like me, you tend to change your mind a lot during
        development. This extension makes updating markup tags a breeze. Just
        edit the openning tag of any HTML or JSX element and it takes care of
        the rest.
      </Extension>
      <Extension
        name="Docker"
        link="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"
      >
        Pretty self explanatory, but if you use Docker on your local machine,
        this extension is a must-have.
      </Extension>
      <Extension
        name="Error Lens"
        link="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"
      >
        Warnings and errors can often go unnoticed until it's too late. This is
        especially true in VSCode when the only visible cue is a tiny lightbulb
        that pops up. This extension makes it very clear what the issue is by
        describing warnings and errors alongside the line of code that you're
        currently editing.
      </Extension>
      <Extension
        name="ESLint"
        link="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
      >
        This extension provides warnings and errors based on any{" "}
        <ExternalLink linkText="ESLint" route="https://eslint.org/" /> rules you
        may have in your project.
      </Extension>
      <Extension
        name="Material Icon Theme"
        link="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
      >
        Beautiful extension that gives descriptive icons to each file type in
        your project's directory. Makes navigating between files very seamless.
      </Extension>
      <Extension
        name="Prettier"
        link="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
      >
        Prettier is a tool that will allow you to specify rules and styleguides
        for how you structure your codebase. By installing the prettier
        extension for VSCode, you can also configure it to auto format your code
        based on those guidelines each time you save a file.
      </Extension>
      <Extension
        name="Reactjs Code Snippets"
        link="https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets"
      >
        My JavaScript framework of choice is React, so it just made sense to
        install this extension. If you also prefer to use react, this extension
        will enable shortcuts that you can use to quickly construct all
        different kinds of react components in seconds.
      </Extension>
      <Text>
        If you have some other extensions that I didn't list above, give me a{" "}
        <Link href="/about">
          <a>shout</a>
        </Link>
        . I love discovering new tools that make developing easier 😄
      </Text>
    </>
  );
};

export default VsCodeExtensions;
