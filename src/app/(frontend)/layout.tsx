import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'

export const metadata = {
  description: 'A premium luxe store built with Payload CMS.',
  title: 'LUXE Store',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
                document.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
