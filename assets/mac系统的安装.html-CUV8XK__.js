import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as n}from"./app-Bk5lH8EZ.js";const i="/docs/assets/image2-I7JB-lLd.png",l="/docs/assets/image-OO4FSWhm.png",t="/docs/assets/image-1-BebDiOIJ.png",c={},r=n(`<h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac"><span>mac</span></a></h2><p><code>使用brew安装</code> brew update brew install rabbitmq</p><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3><p><code>在你的shell配置文件中添加如下代码，我的是os12系统，默认为zsh</code></p><p>终端根目录输入 <code>vi .zshrc</code> 编辑添加</p><p>注意：你的版本不一定是 3.13.1，通过输入<code>brew list rabbitmq</code>获取到对应的文件夹地址</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token builtin class-name">export</span> <span class="token assign-left variable">RABBIT_HOME</span><span class="token operator">=</span>/opt/homebrew/Cellar/rabbitmq/3.13.1
 <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$RABBIT_HOME</span>/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件"><span>启用插件</span></a></h3><p><code>启用rabbitmq management插件，用于开启浏览器后台页面</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动和停止" tabindex="-1"><a class="header-anchor" href="#启动和停止"><span>启动和停止</span></a></h3><ul><li><code>brew services list</code> 查看 brew 管理的服务状态等</li><li><code>brew services start rabbitmq</code> 启动</li><li><code>brew services stop rabbitmq</code> 停止</li></ul><h3 id="配置用户" tabindex="-1"><a class="header-anchor" href="#配置用户"><span>配置用户</span></a></h3><p><code>不配置用户远程连接是不被允许的,在开启rabbit后执行</code></p><p>命令行添加</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加用户</span>
rabbitmqctl add_user admin password
<span class="token comment"># 设置为管理员</span>
rabbitmqctl set_user_tags admin administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在管理页面添加（先执行下一步之后）</p><figure><img src="`+i+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="访问可视化监控插件的界面" tabindex="-1"><a class="header-anchor" href="#访问可视化监控插件的界面"><span>访问可视化监控插件的界面</span></a></h3><p>浏览器内输入 http://localhost:15672, 默认的用户名密码都是 guest</p><p>经过上方设置后 账号为 admin 密码为 password</p><h3 id="为虚拟主机配置用户" tabindex="-1"><a class="header-anchor" href="#为虚拟主机配置用户"><span>为虚拟主机配置用户</span></a></h3><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>向下滚动找到对应用户添加（这里是刚刚创建的用户）</p><figure><img src="'+t+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="一些命令" tabindex="-1"><a class="header-anchor" href="#一些命令"><span>一些命令</span></a></h3><ul><li><code>rabbitmqctl stop</code> 停止</li><li><code>rabbitmq-plugins list</code> 插件列表</li><li><code>rabbitmq-plugins enable management</code> 启用插件</li><li><code>rabbitmq-plugins disable xxx</code> 卸载插件</li></ul><h3 id="启动时可能的问题" tabindex="-1"><a class="header-anchor" href="#启动时可能的问题"><span>启动时可能的问题</span></a></h3><p>通过日志查看 <code>/opt/homebrew/var/log/rabbitmq/</code> 辨别问题</p><h4 id="eacces" tabindex="-1"><a class="header-anchor" href="#eacces"><span>eacces</span></a></h4><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h6><div class="language-log line-numbers-mode" data-ext="log" data-title="log"><pre class="language-log"><code>error<span class="token operator">:</span><span class="token operator">{</span>badmatch<span class="token punctuation">,</span><span class="token operator">{</span>error<span class="token punctuation">,</span><span class="token operator">{</span><span class="token operator">{</span>shutdown<span class="token punctuation">,</span><span class="token operator">{</span>failed_to_start_child<span class="token punctuation">,</span>auth<span class="token punctuation">,</span><span class="token operator">{</span><span class="token string">&quot;Error when reading /Users/xxxx/.erlang.cookie: eacces&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果出现如上报错，这通常是由于权限问题（eacces 表示“权限被拒绝”）。</p><h6 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式"><span>解决方式</span></a></h6><ul><li>检查 Erlang cookie 文件的权限： 确保您的用户帐户有权访问和读取这个文件。您可以使用以下命令来检查和修改文件权限：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> /Users/xxx/.erlang.cookie
<span class="token function">chmod</span> <span class="token number">600</span> /Users/xxx/.erlang.cookie

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查文件所有者： 确保 Erlang cookie 文件属于启动 RabbitMQ 的用户。如果不是，您可以使用 chown 命令来更改文件所有者：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chown</span> xxx /Users/xxx/.erlang.cookie

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确保 RabbitMQ 服务使用正确的用户运行。</li><li>重启 RabbitMQ 服务： 在修改了权限之后，尝试重新启动 RabbitMQ 服务</li></ul>`,39),o=[r];function d(p,b){return e(),s("div",null,o)}const u=a(c,[["render",d],["__file","mac系统的安装.html.vue"]]),g=JSON.parse('{"path":"/back-end/spring/SpringCloud/%E5%B8%B8%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMq/mac%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AE%89%E8%A3%85.html","title":"2.rabbitmq的安装","lang":"zh-CN","frontmatter":{"title":"2.rabbitmq的安装","category":["介绍"],"tag":["中间件","消息","微服务"]},"headers":[{"level":2,"title":"mac","slug":"mac","link":"#mac","children":[{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"启用插件","slug":"启用插件","link":"#启用插件","children":[]},{"level":3,"title":"启动和停止","slug":"启动和停止","link":"#启动和停止","children":[]},{"level":3,"title":"配置用户","slug":"配置用户","link":"#配置用户","children":[]},{"level":3,"title":"访问可视化监控插件的界面","slug":"访问可视化监控插件的界面","link":"#访问可视化监控插件的界面","children":[]},{"level":3,"title":"为虚拟主机配置用户","slug":"为虚拟主机配置用户","link":"#为虚拟主机配置用户","children":[]},{"level":3,"title":"一些命令","slug":"一些命令","link":"#一些命令","children":[]},{"level":3,"title":"启动时可能的问题","slug":"启动时可能的问题","link":"#启动时可能的问题","children":[]}]}],"git":{"createdTime":1714293737000,"updatedTime":1714375624000,"contributors":[{"name":"shuangqi.li","email":"li_shuangq@foxmail.com","commits":2}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"back-end/spring/SpringCloud/常用中间件/RabbitMq/mac系统的安装.md","localizedDate":"2024年4月28日"}');export{u as comp,g as data};
