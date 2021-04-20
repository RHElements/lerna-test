/**
 * An 'init' function to add the PFE built-in icon sets to the current page.
 */
export function addBuiltIns({ PfeIcon, config }) {
  // If the user wants to completely opt out of default icon sets,
  // allow them to.
  if (config.iconSets && config.iconSets.length === 0) {
    return;
  }

  // If the user provides their own icon sets, use them. If not, use our defaults.
  const iconSets = config.iconSets || [
    {
      name: "web",
      path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs"
    },
    {
      name: "rh",
      path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs"
    }
  ];

  // Register the icon sets.
  iconSets.forEach(set =>
    PfeIcon.addIconSet(set.name, set.path, (name, iconSetName, iconSetPath) => {
      const regex = new RegExp(`^${iconSetName}(-icon)?-(.*)`);
      const [, , iconName] = regex.exec(name);

      const iconId = `${iconSetName}-icon-${iconName}`;
      const iconPath = `${iconSetPath}/${iconId}.svg`;

      return iconPath;
    })
  );
}
