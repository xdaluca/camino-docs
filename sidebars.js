/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "About",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "about",
        },
      ],
    },
    {
      type: "category",
      label: "Technical Documentation",
      collapsible: true,
      collapsed: false,
      items:[
        {
          type: "category",
          label: "Applications",
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "category",
              label: "Camino Node",
              items: [
                {
                  type: "autogenerated",
                  dirName: "apps/nodes",
                },
              ],
            },
            {
              type: "category",
              label: "Release Notes",
              items: [
                {
                  type: "autogenerated",
                  dirName: "apps/release-notes",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Subnets",
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "autogenerated",
              dirName: "subnets",
            },
          ],
        },
        {
          type: "category",
          label: "APIs",
          items: [
            {
              type: "category",
              label: "Camino-Node APIs",
              items: [
                {
                  type: "autogenerated",
                  dirName: "developer/apis/camino-node-apis",
                },
              ],
            },
            "developer/apis/magellan",
          ],
        },
        {
          type: "category",
          label: "References",
          items: [
            {
              type: "autogenerated",
              dirName: "developer/references",
            },
          ],
        },
        {
          type: "category",
          label: "Build",
          items: [
              {
                type: "autogenerated",
                dirName: "developer/build",
              },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "User Guides",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "kyc",
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: true,
      collapsed: false,
        items: [
          {
            type: 'autogenerated',
            dirName: 'faq',
          },
      ],
    },
  ],
};

module.exports = sidebars;
