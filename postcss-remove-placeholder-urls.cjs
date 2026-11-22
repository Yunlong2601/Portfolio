// PostCSS plugin that removes CSS declarations using literal url(...) placeholders.
// Tailwind CSS v4 generates a `.mask-[url(...)]` utility whose `url(...)` value
// Turbopack treats as a file import, producing "Module not found: Can't resolve '...'".
/** @type {import('postcss').PluginCreator} */
function removePlaceholderUrls() {
  return {
    postcssPlugin: 'remove-placeholder-urls',
    Declaration(decl) {
      if (
        decl.value &&
        (decl.value.includes('url(...)') || decl.value.includes('url("...")'))
      ) {
        const parent = decl.parent;
        decl.remove();
        if (parent && parent.nodes && parent.nodes.length === 0) {
          parent.remove();
        }
      }
    },
  };
}
removePlaceholderUrls.postcss = true;

module.exports = removePlaceholderUrls;
