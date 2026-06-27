/*==========================================================================
 NLM_TitleFont.js
----------------------------------------------------------------------------
 (C)2026 NoLimits
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.0.0  2026/06/25 初稿
============================================================================*/

/*:
 * @target MZ MV
 * @plugindesc タイトル文字修飾プラグイン
 * @author ノリミツ (NoLimits)
 * @url https://github.com/nolimits-tukool
 * 
 * @param fontSize
 * @text タイトルサイズ
 * @desc タイトルのフォントサイズ（デフォルト：72）
 * @type number
 * @default 72
 * 
 * @param fontColor
 * @text タイトルカラー
 * @desc タイトルフォントのカラー番号(0-31)（デフォルト：0(白)）
 * @type color
 * @default 0
 * 
 * @param outlineColor
 * @text タイトル縁取りカラー
 * @desc フォントの縁取り（アウトライン）のカラー番号(0-31) 　　　（デフォルト：15(黒)）
 * @type color
 * @default 15
 * 
 * @param outlineWidth
 * @text タイトル縁取り幅
 * @desc フォントの縁取り（アウトライン）の幅（デフォルト：8）
 * @type number
 * @default 8
 * 
 * @param fontBold
 * @text タイトル太字
 * @desc タイトルを太字にするか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param fontItalic
 * @text タイトル斜字
 * @desc タイトルを斜字にするか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param titleAlign
 * @text タイトルそろえ
 * @desc タイトルの文字そろえ（デフォルト：center）
 * @type select
 * @option center
 * @option left
 * @option right
 * @default center
 * 
 * @param titleX
 * @text タイトルXマージン
 * @desc タイトルX座標マージン（デフォルト：20）
 * @type number
 * @default 20
 * 
 * @param titlePy
 * @text タイトルY補正
 * @desc タイトルY座標補正（デフォルト：0）　　　　　　　　　　　　（上に補正したい際はマイナス値入力）
 * @type number
 * @min -9999
 * @default 0
 * 
 * @param fontFile
 * @text タイトルフォント名
 * @desc タイトル専用フォントファイルの用意があればファイル名を記入（拡張子まで記入）（ファイルをfontsフォルダ内へ入れておく)
 * @type string
 * 
 * @param shadow
 * @text タイトル影付き文字
 * @desc タイトル文字に影を付けるか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param shadowColor
 * @parent shadow
 * @text 影カラー
 * @desc タイトル影のカラー番号(0-31)（デフォルト：15(黒))
 * @type color
 * @default 15
 * 
 * @param shadowX
 * @parent shadow
 * @text 影オフセットX
 * @desc タイトル影のオフセットX（デフォルト：5）
 * @type number
 * @min -9999
 * @default 5
 * 
 * @param shadowY
 * @parent shadow
 * @text 影オフセットY
 * @desc タイトル影のオフセットY（デフォルト：5）
 * @type number
 * @min -9999
 * @default 5
 * 
 * @param belt
 * @text 背面帯をつけるか
 * @desc タイトル文字背面に帯をつけるか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param beltColor
 * @parent belt
 * @text 背面帯カラー
 * @desc 背面帯のカラー番号(0-31)（デフォルト：15(黒))
 * @type color
 * @default 15
 * 
 * @param beltOpacity
 * @parent belt
 * @text 帯不透明度
 * @desc 背面帯の不透明度(0-255)（デフォルト：150）
 * @type number
 * @max 255
 * @default 150
 * 
 * @param beltY
 * @parent belt
 * @text 背面帯Y補正
 * @desc 背面帯のY補正（デフォルト：0）　　　　　　　　　　　　　　（上に補正したい際はマイナス値入力）
 * @type number
 * @min -9999
 * @default 0
 *
 * @param beltH
 * @parent belt
 * @text 背面帯高
 * @desc 背面帯の高さ（デフォルト：130）
 * @type number
 * @default 130
 * 
 * @param behind2
 * @parent belt
 * @text タイトル2の後配置
 * @desc 帯をタイトル画像2の後面に配置するか（デフォルト：ON）
 * @type boolean
 * @default true
 * 
 * @param subTitle
 * @text サブタイトル
 * @desc サブタイトルがあれば、一行文字列を記入
 * @type string
 * 
 * @param subFontSize
 * @parent subTitle
 * @text サブタイトルサイズ
 * @desc タイトルのフォントサイズ（デフォルト：36）
 * @type number
 * @default 36
 * 
 * @param subFontColor
 * @parent subTitle
 * @text サブタイトルカラー
 * @desc タイトルフォントのカラー番号(0-31)（デフォルト：0(白)）
 * @type color
 * @default 0
 * 
 * @param subOutlineColor
 * @parent subTitle
 * @text サブ縁取りカラー
 * @desc フォントの縁取り（アウトライン）のカラー番号(0-31) 　　　（デフォルト：15(黒)）
 * @type color
 * @default 15
 * 
 * @param subOutlineWidth
 * @parent subTitle
 * @text サブ縁取り幅
 * @desc フォントの縁取り（アウトライン）の幅（デフォルト：4）
 * @type number
 * @default 4
 * 
 * @param subFontBold
 * @parent subTitle
 * @text サブタイトル太字
 * @desc サブタイトルを太字にするか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param subFontItalic
 * @parent subTitle
 * @text サブタイトル斜字
 * @desc サブタイトルを斜字にするか（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param subTitleAlign
 * @parent subTitle
 * @text サブタイトルそろえ
 * @desc サブタイトルの文字そろえ（デフォルト：center）
 * @type select
 * @option center
 * @option left
 * @option right
 * @default center
 * 
 * @param subX
 * @parent subTitle
 * @text サブタイトルXマージン
 * @desc サブタイトルX座標マージン（デフォルト：20）
 * @type number
 * @default 20
 * 
 * @param subPy
 * @parent subTitle
 * @text サブタイトルY補正
 * @desc サブタイトルY座標補正（デフォルト：0）　　　　　　　　　　（上に補正したい際はマイナス値入力）
 * @type number
 * @min -9999
 * @default 0
 * 
 * @param subFontFile
 * @parent subTitle
 * @text サブフォント名
 * @desc サブタイトルフォントファイルの用意があればファイル名を記入（拡張子まで記入）（ファイルをfontsフォルダ内へ入れておく)
 * @type string
 * 
 * @param adjustTitle2
 * @text タイトル2画調整
 * @desc タイトル2画を縦横比を無視して最大画面に拡大調整する　　　　（デフォルト：ON）（MV時はタイトル1画の拡大調整も行なう）
 * @type boolean
 * @default true
 * 
 * @help
 * 
 * 【RPGツクールMZ・MV両用プラグイン】（v1.0.0）
 * タイトル文字を簡易的に色々修飾できます
 * 　サイズ、カラー、縁取り、太字、斜字、そろえ、フォントファイル、影付き文字、
 * 背面帯、サブタイトルなどを パラメータで変えられます
 * 
 * <注意>
 * 　もともとMZ用で開発したため、MVでパラメータのカラー値を修正する際は
 *  テキストでの数値入力となります（矢印キーが使えません）
 * 
 * プラグインコマンドはありません
 * 利用規約はMITライセンスの通りです
 */

(() => {
    "use strict";

    const pluginName  = "NLM_TitleFont";
    const NTMFparam   = PluginManager.parameters(pluginName);
    NTMFparam.shadowX = Number(NTMFparam.shadowX) || 0;
    NTMFparam.shadowY = Number(NTMFparam.shadowY) || 0;
    NTMFparam.beltY   = Number(NTMFparam.beltY)   || 0;
    NTMFparam.beltH   = Number(NTMFparam.beltH)   || 140;
    NTMFparam.subPy   = Number(NTMFparam.subPy)   || 0;
    NTMFparam.fontSize    = Number(NTMFparam.fontSize)    || 72;
    NTMFparam.subFontSize = Number(NTMFparam.subFontSize) || 36;
    NTMFparam.shadow  = NTMFparam.shadow  === "true";
    NTMFparam.belt    = NTMFparam.belt    === "true";
    NTMFparam.behind2 = NTMFparam.behind2 === "true" && NTMFparam.belt;
    NTMFparam.fontBold   = NTMFparam.fontBold   === "true";
    NTMFparam.fontItalic = NTMFparam.fontItalic === "true";
    NTMFparam.subFontBold   = NTMFparam.subFontBold   === "true";
    NTMFparam.subFontItalic = NTMFparam.subFontItalic === "true";
    NTMFparam.adjustTitle2  = NTMFparam.adjustTitle2  === "true";
    const NTMFmz = Utils.RPGMAKER_NAME === "MZ";
    const NTMFmainFamily = "TitleFont";
    const NTMFsubFamily  = "SubtitleFont";

    if (!NTMFmz) { // MVのとき
        const _Bitmap_initialize = Bitmap.prototype.initialize;
        Bitmap.prototype.initialize = function(width, height) { 
            _Bitmap_initialize.apply(this, arguments);
            this.fontBold = false;
        };

        const _Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
        Bitmap.prototype._makeFontNameText = function() { // MVで太字を利用可能に
            const bold = this.fontBold ? "Bold " : "";
            return bold + _Bitmap_makeFontNameText.call(this);
        };

        const _Graphics_createAllElements = Graphics._createAllElements;
        Graphics._createAllElements = function() {
            _Graphics_createAllElements.apply(this, arguments);
            this.NTMFloadFont();
        };

        Graphics.NTMFloadFont = function() { // MV用フォントロード
            if (NTMFparam.fontFile) {
                this.loadFont(NTMFmainFamily, "fonts/" + NTMFparam.fontFile);
            }
            if (NTMFparam.subFontFile) {
                this.loadFont(NTMFsubFamily,  "fonts/" + NTMFparam.subFontFile);
            }
        };

        if (NTMFparam.adjustTitle2) {
            const _Scene_Title_start = Scene_Title.prototype.start;
            Scene_Title.prototype.start = function() {
                _Scene_Title_start.apply(this, arguments);
                this.NTMFscaleSprite1(this._backSprite1);
                this.NTMFscaleSprite2(this._backSprite2);
            };
        }
    } else { // MZのとき
        const _SB_loadGameFonts = Scene_Boot.prototype.loadGameFonts;
        Scene_Boot.prototype.loadGameFonts = function() {
            _SB_loadGameFonts.apply(this, arguments);
            this.NTMFloadFont();
        };

        Scene_Boot.prototype.NTMFloadFont = function() { // MZ用フォントロード
            if (NTMFparam.fontFile) {
                FontManager.load(NTMFmainFamily, NTMFparam.fontFile);
            }
            if (NTMFparam.subFontFile) {
                FontManager.load(NTMFsubFamily,  NTMFparam.subFontFile);
            }
        };

        if (NTMFparam.adjustTitle2) {
            const _ST_adjustBackground = Scene_Title.prototype.adjustBackground;
            Scene_Title.prototype.adjustBackground = function() {
                _ST_adjustBackground.apply(this, arguments);
                this.NTMFscaleSprite2(this._backSprite2);
            };
        }
    }

    Scene_Title.prototype.NTMFscaleSprite1 = function(sprite) { // MV用タイトル1画scale調整
        const ratioX = Graphics.width  / sprite.bitmap.width;
        const ratioY = Graphics.height / sprite.bitmap.height;
        const scale  = Math.max(ratioX, ratioY, 1.0);
        sprite.scale.x = scale;
        sprite.scale.y = scale;
    };

    Scene_Title.prototype.NTMFscaleSprite2 = function(sprite) { // タイトル2画のscale調整
        sprite.scale.x = Graphics.width  / sprite.bitmap.width;
        sprite.scale.y = Graphics.height / sprite.bitmap.height;
    };

    const _ST_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _ST_createBackground.apply(this, arguments);
        this.NTMFcreateBelt();
    };

    Scene_Title.prototype.NTMFcreateBelt = function() { // 背面帯スプライト作成
        this._backSpriteNTMF = new Sprite(
            new Bitmap(Graphics.width, Graphics.height)
        );
        this.addChild(this._backSpriteNTMF);
        if (NTMFparam.behind2) {
            this.addChild(this._backSprite2);
        }
    };

    Scene_Title.prototype.NTMFtitleWidth = function(x, main) {
        const shadowX  = NTMFparam.shadowX;
        const italic   = main ? NTMFparam.fontItalic : NTMFparam.subFontItalic;
        const fontSize = main ? NTMFparam.fontSize   : NTMFparam.subFontSize;
        const p1 = italic ? Math.floor(fontSize / 4) : 0;
        const p2 = !main ? 0 : NTMFparam.shadow && shadowX > 0 ? shadowX : 0
        return Graphics.width - x * 2 - p1 - p2 - 10;
    };

    Scene_Title.prototype.drawGameTitle = function() { // タイトル文字描画
        const x  = Number(NTMFparam.titleX)  || 0;
        const pY = Number(NTMFparam.titlePy) || 0;
        const y  = Graphics.height / 4 + pY;
        const w  = this.NTMFtitleWidth(x, true);
        const dx = x + NTMFparam.shadowX;
        const dy = y + NTMFparam.shadowY;
        const tc = this.NTMFtextColor(NTMFparam.fontColor);
        const oc = this.NTMFtextColor(NTMFparam.outlineColor);
        const dc = this.NTMFtextColor(NTMFparam.shadowColor);
        if (NTMFparam.belt) {
            this.NTMFdrawBelt(y);
        }
        if (NTMFparam.shadow) {
            this.NTMFdrawTitleText(dx, dy, w, dc, dc);
        }
        this.NTMFdrawTitleText(x, y, w, tc, oc);
        if (NTMFparam.subTitle) {
            this.NTMFdrawSubGameTitle(y);
        }
    };

    Scene_Title.prototype.NTMFdrawSubGameTitle = function(y) { // サブタイトル描画
        const sx  = Number(NTMFparam.subX) || 0;
        const sy  = y + 90 + NTMFparam.subPy;
        const sw  = this.NTMFtitleWidth(sx, false);
        const stc = this.NTMFtextColor(NTMFparam.subFontColor);
        const soc = this.NTMFtextColor(NTMFparam.subOutlineColor);
        this.NTMFdrawSubTitleText(sx, sy, sw, stc, soc);
    };

    Scene_Title.prototype.NTMFdrawTitleText = function(x, y, w, tc, oc) {
        const text   = $dataSystem.gameTitle;
        const bitmap = this._gameTitleSprite.bitmap;
        bitmap.fontFace     = this.NTMFtitleFont(NTMFmainFamily)
        bitmap.textColor    = tc;
        bitmap.outlineColor = oc;
        bitmap.outlineWidth = Number(NTMFparam.outlineWidth) || 0;
        bitmap.fontSize     = NTMFparam.fontSize;
        bitmap.fontBold     = NTMFparam.fontBold;
        bitmap.fontItalic   = NTMFparam.fontItalic;
        bitmap.drawText(text, x, y, w, 48, NTMFparam.titleAlign);
    };

    Scene_Title.prototype.NTMFdrawSubTitleText = function(x, y, w, tc, oc) {
        const text   = NTMFparam.subTitle;
        const bitmap = this._gameTitleSprite.bitmap;
        bitmap.fontFace     = this.NTMFtitleFont(NTMFsubFamily)
        bitmap.textColor    = tc;
        bitmap.outlineColor = oc;
        bitmap.outlineWidth = Number(NTMFparam.subOutlineWidth) || 0;
        bitmap.fontSize     = NTMFparam.subFontSize;
        bitmap.fontBold     = NTMFparam.subFontBold;
        bitmap.fontItalic   = NTMFparam.subFontItalic;
        bitmap.drawText(text, x, y, w, 48, NTMFparam.subTitleAlign);
    };

    Scene_Title.prototype.NTMFdrawBelt = function(y) { // 背面帯描画
        const by = y - 44 + NTMFparam.beltY;
        const sy = NTMFparam.shadow ? NTMFparam.shadowY : 0;
        const height = NTMFparam.beltH + sy;
        const color  = this.NTMFtextColor(NTMFparam.beltColor);
        const sprite = this._backSpriteNTMF;
        sprite.bitmap.fillRect(0, by, Graphics.width, height, color);
        sprite.opacity = Number(NTMFparam.beltOpacity) || 0;
    };

    Scene_Title.prototype.NTMFtitleFont = function(family) {
        return family + ", "+ this.NTMFstandardFont();
    };

    Scene_Title.prototype.NTMFstandardFont = function() {
        return NTMFmz ? $gameSystem.mainFontFace() : "GameFont";
    };

    Scene_Title.prototype.NTMFtextColor = function(n) {
        return NTMFmz ? ColorManager.textColor(n) : this.NTMFmvColor(n);
    };

    Scene_Title.prototype.NTMFmvColor = function(n) { // MV用テキストカラー
        const px = 96 + (n % 8) * 12 + 6;
        const py = 144 + Math.floor(n / 8) * 12 + 6;
        return this.NTMFgetPixel(px, py);
    };

    Scene_Title.prototype.NTMFgetPixel = function(px, py) {
        const skin = ImageManager.loadSystem("Window");
        return skin.getPixel(px, py);
    };
})();
