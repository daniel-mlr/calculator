version 6.0
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
inoremap <silent> <expr> <Plug>delimitMateS-BS delimitMate#WithinEmptyPair() ? "\<Del>" : "\<S-BS>"
inoremap <silent> <Plug>delimitMateBS =delimitMate#BS()
imap <F8> Yp^v$r-o
imap <F5> =strftime("%c") 
vnoremap  :call Incr()
nmap  i
nmap   i 
map ,e :e =expand("%:p:h") . "/" 
nnoremap Q q
vmap Q gq
omap Q gq
vmap R :<BS><BS><BS><BS><BS>let @9=@"gvx"9P
xmap S <Plug>VSurround
vmap [% [%m'gv``
nmap \l :set list!
vmap ]% ]%m'gv``
vmap a% [%v]%
nmap cS <Plug>CSurround
nmap cs <Plug>Csurround
nmap ds <Plug>Dsurround
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
xmap gS <Plug>VgSurround
map q :q
nmap ySS <Plug>YSsurround
nmap ySs <Plug>YSsurround
nmap yss <Plug>Yssurround
nmap yS <Plug>YSurround
nmap ys <Plug>Ysurround
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nnoremap <silent> <Plug>SurroundRepeat .
nnoremap <SNR>39_: :=v:count ? v:count : ''
map <F2> :NERDTreeToggle
map <F8> Yp^v$r-o     
map <F6> _
map <F10> :q
map <F5> a=strftime("%c") 
map <F12> :set number!
imap  bi
imap  
imap S <Plug>ISurround
imap s <Plug>Isurround
imap <NL> ji
imap  ki
imap  lli
imap  :wi
imap  lwi
imap ,>> »
imap ,<< « 
imap ,cadi c'est-à-dire
imap ,cad c.-à-d.
imap :w :w
imap ;; A
imap jj 
let &cpo=s:cpo_save
unlet s:cpo_save
set autochdir
set autoindent
set background=dark
set backspace=indent,eol,start
set backup
set backupdir=./.backup,.,/tmp
set directory=.,./.backup,/tmp
set expandtab
set fileencodings=ucs-bom,utf-8,default,latin1
set grepprg=grep\ -nH\ $*
set guifont=DejaVu\ Sans\ Mono\ for\ Powerline\ 9
set helplang=en
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set listchars=tab:»\ ,eol:¬
set mouse=nv
set printoptions=paper:letter
set ruler
set runtimepath=~/.vim,~/.vim/bundle/vundle,~/.vim/bundle/powerline/powerline/bindings/vim/,~/.vim/bundle/nerdtree,~/.vim/bundle/python-mode,~/.vim/bundle/html5.vim,~/.vim/bundle/vim-fugitive,~/.vim/bundle/vim-surround,~/.vim/bundle/conky-syntax.vim,~/.vim/bundle/julia-vim,~/.vim/bundle/matchit.zip,~/.vim/bundle/vim-javascript-syntax,~/.vim/bundle/delimitMate,~/.vim/bundle/syntastic,/var/lib/vim/addons,/usr/share/vim/vimfiles,/usr/share/vim/vim74,/usr/share/vim/vimfiles/after,/var/lib/vim/addons/after,~/.vim/after,~/.vim/bundle/vundle/,~/.local/lib/python2.7/site-packages/powerline/bindings/vim/,~/.vim/bundle/vundle/after,~/.vim/bundle/powerline/powerline/bindings/vim//after,~/.vim/bundle/nerdtree/after,~/.vim/bundle/python-mode/after,~/.vim/bundle/html5.vim/after,~/.vim/bundle/vim-fugitive/after,~/.vim/bundle/vim-surround/after,~/.vim/bundle/conky-syntax.vim/after,~/.vim/bundle/julia-vim/after,~/.vim/bundle/matchit.zip/after,~/.vim/bundle/vim-javascript-syntax/after,~/.vim/bundle/delimitMate/after,~/.vim/bundle/syntastic/after,/usr/share/lilypond/current/vim/
set shiftwidth=4
set showcmd
set statusline=%!pyeval('powerline.new_window()')
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc
set tabline=%!pyeval('powerline.tabline()')
set tabstop=4
set wildignore=*.o,*.obj,*.bak,*.exe
" vim: set ft=vim :
