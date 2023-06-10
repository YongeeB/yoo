import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, m as missing_component, f as each, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, l as globals } from "../../chunks/index.js";
const placeholderClass = "svelte-lazy-placeholder";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = null } = $$props;
  let { placeholderProps = null } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderProps === void 0 && $$bindings.placeholderProps && placeholderProps !== void 0)
    $$bindings.placeholderProps(placeholderProps);
  return `${placeholder ? `<div${add_attribute("class", placeholderClass, 0)}>${typeof placeholder === "string" ? `<div>${escape(placeholder)}</div>` : `${["function", "object"].includes(typeof placeholder) ? `${validate_component(placeholder || missing_component, "svelte:component").$$render($$result, Object.assign({}, placeholderProps), {}, {})}` : ``}`}</div>` : ``}`;
});
const Src = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 0 } = $$props;
  let { offset = 150 } = $$props;
  let { fadeOption = { delay: 0, duration: 400 } } = $$props;
  let { resetHeightDelay = 0 } = $$props;
  let { onload = null } = $$props;
  let { placeholder = null } = $$props;
  let { placeholderProps = null } = $$props;
  let { class: className = "" } = $$props;
  const rootClass = "svelte-lazy" + (className ? " " + className : "");
  const rootInitialHeight = getStyleHeight();
  function getStyleHeight() {
    return typeof height === "number" ? height + "px" : height;
  }
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.fadeOption === void 0 && $$bindings.fadeOption && fadeOption !== void 0)
    $$bindings.fadeOption(fadeOption);
  if ($$props.resetHeightDelay === void 0 && $$bindings.resetHeightDelay && resetHeightDelay !== void 0)
    $$bindings.resetHeightDelay(resetHeightDelay);
  if ($$props.onload === void 0 && $$bindings.onload && onload !== void 0)
    $$bindings.onload(onload);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderProps === void 0 && $$bindings.placeholderProps && placeholderProps !== void 0)
    $$bindings.placeholderProps(placeholderProps);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", rootClass, 0)} style="${"height: " + escape(rootInitialHeight, true)}">${`${placeholder ? `${validate_component(Placeholder, "Placeholder").$$render($$result, { placeholder, placeholderProps }, {}, {})}` : ``}`}
</div>`;
});
const Card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".cards-container.svelte-1dzc8xk.svelte-1dzc8xk{display:flex;flex-direction:column}img.svelte-1dzc8xk.svelte-1dzc8xk{width:90%;max-width:400px;margin-bottom:1em;border-radius:20px}.card-container.svelte-1dzc8xk.svelte-1dzc8xk{margin-bottom:1em}.cards-container.svelte-1dzc8xk .image-container.svelte-1dzc8xk{padding-top:10px;display:flex;justify-content:center}#title.svelte-1dzc8xk.svelte-1dzc8xk{cursor:pointer;color:orange;font-size:1.5em;text-align:center;margin-bottom:10px}#title.svelte-1dzc8xk.svelte-1dzc8xk:hover{text-decoration:underline}#contents.svelte-1dzc8xk.svelte-1dzc8xk{font-family:cursive;padding:20px;line-height:1.5em}@media(min-width: 800px){.cards-container.svelte-1dzc8xk.svelte-1dzc8xk{display:flex;justify-content:center}.grid.svelte-1dzc8xk.svelte-1dzc8xk{display:grid;grid-template-columns:1fr 1fr}.image-container.svelte-1dzc8xk.svelte-1dzc8xk{align-self:center}}@media(min-width: 1150px){.grid.svelte-1dzc8xk.svelte-1dzc8xk{grid-template-columns:1fr 1fr 1fr}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    },
    {
      name: "Yoo Painting",
      src: "/painting.jpg"
    },
    {
      name: "Yoo Tie And Dye",
      src: "/tie-dye.jpg"
    },
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    },
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    },
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    },
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    },
    {
      name: "Yoo Photography",
      src: "/camera.jpg"
    }
  ];
  $$result.css.add(css$3);
  return `<div class="cards-container svelte-1dzc8xk"><div class="grid svelte-1dzc8xk">${each(images, (image) => {
    return `<div class="card-container svelte-1dzc8xk">
<div class="image-container svelte-1dzc8xk">
${validate_component(Src, "Lazy").$$render($$result, { height: "300px" }, {}, {
      default: () => {
        return `<img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.name, 0)} class="svelte-1dzc8xk">
`;
      }
    })}</div>
<h3 id="title" class="svelte-1dzc8xk">${escape(image.name)}</h3>
<p id="contents" class="svelte-1dzc8xk">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque magnam maxime optio tempore, quia, nisi deleniti soluta enim fugiat molestiae possimus natus fugit itaque quam architecto adipisci voluptatum a! Porro deserunt alias repellat eum quibusdam eius officia dolorum id ipsa.</p>
</div>`;
  })}</div>
</div>`;
});
const Info_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "main.svelte-ll46dk.svelte-ll46dk{margin:30px 0}main.svelte-ll46dk article.svelte-ll46dk{line-height:2em;font-family:'Mukta', sans-serif}main.svelte-ll46dk article.svelte-ll46dk::first-letter{color:orange;font-weight:bolder;font-size:1.4em;font-family:cursive}@media(min-width: 650px){main.svelte-ll46dk article.svelte-ll46dk{font-size:1.5em}}@media(min-width: 900px){main.svelte-ll46dk article.svelte-ll46dk{font-size:1.7em}}",
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="svelte-ll46dk"><section><article class="svelte-ll46dk"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum ad obcaecati, sint, blanditiis est cupiditate autem aut velit reprehenderit neque? Explicabo laborum, fugit necessitatibus atque quia in magnam nobis eius eligendi exercitationem, repellendus voluptate architecto fuga nulla vel ab facere aliquid, voluptates nisi iste! Fugiat iusto cupiditate voluptatum labore perspiciatis modi consequatur! Et itaque veniam ex, natus corporis veritatis ipsa provident officia, velit deleniti quidem harum accusantium rem labore id tempore dicta consectetur modi nisi corrupti. Cum, voluptate cumque?</p></article></section>
</main>`;
});
const global = "";
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const Svg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    let paths = [];
    const [width, height, , , path] = data.icon;
    if (Array.isArray(path)) {
      paths = path;
    } else {
      paths = [path];
    }
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : `
    ${iconData ? `${iconData.paths ? `${each(iconData.paths, (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })}` : ``}
      ${iconData.polygons ? `${each(iconData.polygons, (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })}` : ``}
      ${iconData.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}` : ``}
  `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const moonO = { "moon-o": { "width": 1536, "height": 1792, "paths": [{ "d": "M1262 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zM1465 1218q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z" }] } };
const NavigationBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root[data-theme='light']{background-color:var(--primary-background)}:root[data-theme='dark']{background-color:var(--secondary-background);color:antiquewhite}.nav-container.svelte-1lwrujv.svelte-1lwrujv{position:relative;display:flex;align-items:center;justify-content:space-between;font-family:cursive}.nav-container.svelte-1lwrujv .header.svelte-1lwrujv{flex-basis:10%;text-align:left}.header.svelte-1lwrujv h1.svelte-1lwrujv{color:var(--primary-color)}.nav-container.svelte-1lwrujv .nav-links.svelte-1lwrujv{display:flex;justify-content:space-around;flex-basis:85%;width:100%;margin-right:10px}.nav-links.svelte-1lwrujv nav.svelte-1lwrujv{padding:5px 7px;font-weight:bold;text-transform:capitalize;cursor:pointer}.nav-links.svelte-1lwrujv nav.svelte-1lwrujv:hover{color:var(--primary-color)}.nav-links.svelte-1lwrujv #active.svelte-1lwrujv{background-color:var(--primary-color);border-radius:5px;color:black}.nav-links.svelte-1lwrujv #active.svelte-1lwrujv:hover{color:#000}.theme.svelte-1lwrujv.svelte-1lwrujv{flex-basis:5%;display:flex;justify-content:center;align-items:center}@media(width < 550px){.nav-container.svelte-1lwrujv .header.svelte-1lwrujv{display:none}.nav-container.svelte-1lwrujv .nav-links.svelte-1lwrujv{flex-basis:80%}.theme.svelte-1lwrujv.svelte-1lwrujv{flex-basis:5%}}",
  map: null
};
const NavigationBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nav-container svelte-1lwrujv"><div class="header svelte-1lwrujv"><header><h1 class="svelte-1lwrujv">Yoo</h1></header></div>
    <div class="nav-links svelte-1lwrujv"><nav id="active" class="svelte-1lwrujv">home</nav>
        <nav class="svelte-1lwrujv">stores</nav>
        <nav class="svelte-1lwrujv">order</nav>
        <nav class="svelte-1lwrujv">contact</nav>
        <nav class="svelte-1lwrujv">info</nav></div>
    
    <div class="theme svelte-1lwrujv">${validate_component(Icon, "Icon").$$render($$result, { data: moonO, scale: "1.5" }, {}, {})}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="container">${validate_component(NavigationBar, "NavigationBar").$$render($$result, {}, {}, {})}
${validate_component(Info, "Info").$$render($$result, {}, {}, {})}
${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
