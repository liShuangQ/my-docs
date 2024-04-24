import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-Du9n6nRN.js";const t="/docs/assets/itemssh-BXWkJ9br.png",i={},l=e(`<h2 id="添加脚本" tabindex="-1"><a class="header-anchor" href="#添加脚本"><span>添加脚本</span></a></h2><p>复制脚本到一个你喜欢的文件夹内，一般在.ssh文件夹内，保存为sh格式，我的名称为 <code>item2login.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    <span class="token builtin class-name">set</span> <span class="token function">timeout</span> <span class="token number">30</span>
    spawn <span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>lindex <span class="token variable">$argv</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>lindex <span class="token variable">$argv</span> <span class="token number">1</span><span class="token punctuation">]</span>@<span class="token punctuation">[</span>lindex <span class="token variable">$argv</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token function">expect</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;(yes/no)?&quot;</span>
            <span class="token punctuation">{</span>send <span class="token string">&quot;yes<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span>exp_continue<span class="token punctuation">}</span>
            <span class="token string">&quot;password:&quot;</span>
            <span class="token punctuation">{</span>send <span class="token string">&quot;[lindex <span class="token variable">$argv</span> 3]<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    interact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="item2添加设置" tabindex="-1"><a class="header-anchor" href="#item2添加设置"><span>item2添加设置</span></a></h2><p>点击Preferences -&gt; Profiles -&gt; 在左侧新加一个配置信息 -&gt; 根据下方配置添加</p><figure><img src="`+t+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>如果你的脚本没放在.ssh目录下 ~/.ssh则替换为你的位置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>~/.ssh/item2login.sh 22 用户 ip 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>端口</li><li>用户名</li><li>服务器ip</li><li>密码</li></ul><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2><p>配置完成后在item2界面，按 ‘common + o’ 即可</p>`,11),c=[l];function o(p,r){return n(),a("div",null,c)}const m=s(i,[["render",o],["__file","item2_ssh快速登录.html.vue"]]),h=JSON.parse('{"path":"/configuration/mac/%E9%85%8D%E7%BD%AE/item2_ssh%E5%BF%AB%E9%80%9F%E7%99%BB%E5%BD%95.html","title":"item2 ssh快速登录","lang":"zh-CN","frontmatter":{"title":"item2 ssh快速登录","category":["操作"],"tag":["mac item2 ssh"]},"headers":[{"level":2,"title":"添加脚本","slug":"添加脚本","link":"#添加脚本","children":[]},{"level":2,"title":"item2添加设置","slug":"item2添加设置","link":"#item2添加设置","children":[]},{"level":2,"title":"快捷键","slug":"快捷键","link":"#快捷键","children":[]}],"git":{"createdTime":1713949877000,"updatedTime":1713949877000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":1}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"configuration/mac/配置/item2_ssh快速登录.md","localizedDate":"2024年4月24日"}');export{m as comp,h as data};
