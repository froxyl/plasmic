// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tTVo6VGQxVsV8CPaSYta2V
// Component: _dw7WaYlYkppNs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: vYbpbNH9aVEQkI/component
import TextInput from "../../TextInput"; // plasmic-import: C6sGYs-PpV8rrZ/component
import { useScreenVariants as useScreenVariantsnBk0YvTa7Lyif } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _nBK0yvTA7Lyif/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: tTVo6VGQxVsV8CPaSYta2V/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: _dw7WaYlYkppNs/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: 4SnNculc5OIhwu/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: WO4wJ1e9wWCZw_/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: HMGgH9j6xriNP0/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: LC8Iie171EA4SV/icon
import logoFooterpngEvxVptjtgwhzO from "./images/logoFooterpng.png"; // plasmic-import: EvxVptjtgwhz-O/picture

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooterSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnBk0YvTa7Lyif()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___0DxNm)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__g84Ds)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"35px"}
            displayMaxWidth={"229px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: logoFooterpngEvxVptjtgwhzO,
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kiFvi
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__tKc4O)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__dEe3G)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg__agHc)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg___9BJgz)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg__q46E)}
              role={"img"}
            />
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___2ECe5)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__feTr
            )}
          >
            {"Menu"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__s38Km)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__kVqQp)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__hDzC6)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qxFvR
              )}
            >
              {"How it work"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__nhUvs)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__z6Fbl)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__iPjFh)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__a2Ib6
              )}
            >
              {"Pricing"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__zoOPa)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__dXbm)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__rVjR)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c6S3Q
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__rg7Qc)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4___11Znz
            )}
          >
            {"Help"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__qwtCd)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___8Wdp6)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__iutj8)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rSfyn
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__vpRVj)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__k4Dub)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___4WIfb)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__etGnj
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__k9Q3)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__atZH
            )}
          >
            {"Company"}
          </h4>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tsguL
            )}
          >
            {"Lorem ipsum dolor sit amet, consectetur."}
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
          />

          <Button
            className={classNames("__wab_instance", sty.button__o5JB1)}
            color={"white"}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__t0N6U
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Subscribe"
                : "Subscribe"}
            </div>
          </Button>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__zwoem)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lVqdH
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput", "textbox"],
  img: ["img"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
