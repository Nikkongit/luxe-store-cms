/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction} htmlProps={{ suppressHydrationWarning: true }}>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                  const target = mutation.target;
                  if (target && target.removeAttribute) {
                    if (target.hasAttribute('cz-shortcut-listen')) target.removeAttribute('cz-shortcut-listen');
                    if (target.hasAttribute('bis_skin_checked')) target.removeAttribute('bis_skin_checked');
                    if (target.hasAttribute('data-new-gr-c-s-check-loaded')) target.removeAttribute('data-new-gr-c-s-check-loaded');
                    if (target.hasAttribute('data-gr-ext-installed')) target.removeAttribute('data-gr-ext-installed');
                  }
                }
                
                if (mutation.type === 'childList') {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                      if (node.hasAttribute('cz-shortcut-listen')) node.removeAttribute('cz-shortcut-listen');
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.hasAttribute('data-new-gr-c-s-check-loaded')) node.removeAttribute('data-new-gr-c-s-check-loaded');
                      if (node.hasAttribute('data-gr-ext-installed')) node.removeAttribute('data-gr-ext-installed');
                      
                      // Remove emotion style tags injected by extensions into head which breaks Next.js hydration
                      if (node.tagName === 'STYLE' && node.hasAttribute('data-emotion')) {
                        node.remove();
                      }
                      
                      const childrenWithBis = node.querySelectorAll ? node.querySelectorAll('[bis_skin_checked]') : [];
                      childrenWithBis.forEach(child => child.removeAttribute('bis_skin_checked'));
                    }
                  });
                }
              });
            });
            observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
            
            if (document.body) {
              document.body.removeAttribute('cz-shortcut-listen');
              document.body.removeAttribute('bis_skin_checked');
              document.body.removeAttribute('data-new-gr-c-s-check-loaded');
              document.body.removeAttribute('data-gr-ext-installed');
            }
            document.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
          }
        `,
      }}
    />
    {children}
  </RootLayout>
)

export default Layout
